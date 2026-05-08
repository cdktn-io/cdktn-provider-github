# `actionsOrganizationWorkflowPermissions` Submodule <a name="`actionsOrganizationWorkflowPermissions` Submodule" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationWorkflowPermissions <a name="ActionsOrganizationWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissions;

ActionsOrganizationWorkflowPermissions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationSlug(java.lang.String)
//  .canApprovePullRequestReviews(java.lang.Boolean|IResolvable)
//  .defaultWorkflowPermissions(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.organizationSlug">organizationSlug</a></code> | <code>java.lang.String</code> | The slug of the Organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether GitHub Actions can approve pull request reviews in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationSlug`<sup>Required</sup> <a name="organizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.organizationSlug"></a>

- *Type:* java.lang.String

The slug of the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#organization_slug ActionsOrganizationWorkflowPermissions#organization_slug}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.canApprovePullRequestReviews"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether GitHub Actions can approve pull request reviews in any repository in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#can_approve_pull_request_reviews ActionsOrganizationWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.defaultWorkflowPermissions"></a>

- *Type:* java.lang.String

The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization.

Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#default_workflow_permissions ActionsOrganizationWorkflowPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews">resetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions">resetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCanApprovePullRequestReviews` <a name="resetCanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```java
public void resetCanApprovePullRequestReviews()
```

##### `resetDefaultWorkflowPermissions` <a name="resetDefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```java
public void resetDefaultWorkflowPermissions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissions;

ActionsOrganizationWorkflowPermissions.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissions;

ActionsOrganizationWorkflowPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissions;

ActionsOrganizationWorkflowPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissions;

ActionsOrganizationWorkflowPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionsOrganizationWorkflowPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionsOrganizationWorkflowPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionsOrganizationWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput">canApprovePullRequestReviewsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput">defaultWorkflowPermissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput">organizationSlugInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug">organizationSlug</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `canApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="canApprovePullRequestReviewsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviewsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="defaultWorkflowPermissionsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```java
public java.lang.String getDefaultWorkflowPermissionsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationSlugInput`<sup>Optional</sup> <a name="organizationSlugInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput"></a>

```java
public java.lang.String getOrganizationSlugInput();
```

- *Type:* java.lang.String

---

##### `canApprovePullRequestReviews`<sup>Required</sup> <a name="canApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviews();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultWorkflowPermissions`<sup>Required</sup> <a name="defaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```java
public java.lang.String getDefaultWorkflowPermissions();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationSlug`<sup>Required</sup> <a name="organizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug"></a>

```java
public java.lang.String getOrganizationSlug();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationWorkflowPermissionsConfig <a name="ActionsOrganizationWorkflowPermissionsConfig" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.Initializer"></a>

```java
import io.cdktn.providers.github.actions_organization_workflow_permissions.ActionsOrganizationWorkflowPermissionsConfig;

ActionsOrganizationWorkflowPermissionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationSlug(java.lang.String)
//  .canApprovePullRequestReviews(java.lang.Boolean|IResolvable)
//  .defaultWorkflowPermissions(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug">organizationSlug</a></code> | <code>java.lang.String</code> | The slug of the Organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether GitHub Actions can approve pull request reviews in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationSlug`<sup>Required</sup> <a name="organizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug"></a>

```java
public java.lang.String getOrganizationSlug();
```

- *Type:* java.lang.String

The slug of the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#organization_slug ActionsOrganizationWorkflowPermissions#organization_slug}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviews();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether GitHub Actions can approve pull request reviews in any repository in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#can_approve_pull_request_reviews ActionsOrganizationWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```java
public java.lang.String getDefaultWorkflowPermissions();
```

- *Type:* java.lang.String

The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization.

Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#default_workflow_permissions ActionsOrganizationWorkflowPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



